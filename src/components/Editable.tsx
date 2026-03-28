import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { uploadImage } from '../lib/upload';
import { Loader2, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface EditableTextProps {
  value: string;
  onSave: (value: string) => void;
  className?: string;
  multiline?: boolean;
  as?: React.ElementType;
}

export function EditableText({ value, onSave, className = '', multiline = false, as: Component = 'span' }: EditableTextProps) {
  const { isAdmin } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (textRef.current && !isEditing) {
      textRef.current.innerText = value || '';
    }
  }, [value, isEditing]);

  if (!isAdmin) {
    return <Component className={className} style={{ whiteSpace: 'pre-line' }}>{value}</Component>;
  }

  return (
    <Component
      ref={textRef}
      contentEditable={isEditing}
      suppressContentEditableWarning
      role="textbox"
      aria-label="Edit text"
      {...(multiline ? { 'aria-multiline': true } : {})}
      className={cn(className, isEditing ? 'outline-dashed outline-2 outline-brand-red bg-brand-red/10 cursor-text z-50 relative' : 'cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-brand-red/50 relative transition-all', !value && !isEditing && 'inline-block min-w-[200px] min-h-[1.5em] bg-gray-50 rounded px-2 py-0.5 border border-dashed border-gray-300')}
      style={{ whiteSpace: 'pre-line' }}
      onClick={(e: React.MouseEvent) => {
        if (!isEditing) {
          e.preventDefault();
          e.stopPropagation();
          setIsEditing(true);
          setTimeout(() => textRef.current?.focus(), 0);
        }
      }}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        setIsEditing(false);
        if (e.currentTarget.innerText !== value) {
          onSave(e.currentTarget.innerText);
        }
      }}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (!multiline && e.key === 'Enter') {
          e.preventDefault();
          (e.currentTarget as HTMLElement).blur();
        }
      }}
    >
      {value || (!isEditing && <span className="text-gray-400 text-xs italic">Hier eingeben...</span>)}
    </Component>
  );
}

function FadeImg({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-gray-300" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(className, 'transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0')}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}

interface EditableImageProps {
  src: string;
  onSave: (url: string) => void;
  className?: string;
  alt?: string;
  imgClassName?: string;
}

export function EditableImage({ src, onSave, className, alt, imgClassName }: EditableImageProps) {
  const { isAdmin } = useAuth();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      onSave(url);
    } catch {
      alert('Bild-Upload fehlgeschlagen. Bitte versuchen Sie es erneut.');
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  if (!isAdmin) {
    return (
      <div className={className}>
        <FadeImg src={src} alt={alt} className={imgClassName || 'w-full h-full object-cover'} />
      </div>
    );
  }

  return (
    <div className={`relative group cursor-pointer ${className || ''}`} onClick={(e) => { e.stopPropagation(); if (!uploading) fileRef.current?.click(); }}>
      <FadeImg src={src} alt={alt} className={imgClassName || 'w-full h-full object-cover'} />
      <div className={cn(
        "absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity z-10",
        uploading ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}>
        <div className="bg-brand-red text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold tracking-widest uppercase shadow-xl">
          {uploading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</>
          ) : (
            <><ImageIcon className="w-4 h-4" /> Bild ändern</>
          )}
        </div>
      </div>
      <input type="file" ref={fileRef} onChange={handleFile} accept="image/*,.pdf" className="hidden" />
    </div>
  );
}
