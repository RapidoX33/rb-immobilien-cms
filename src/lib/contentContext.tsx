import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getContent, saveContent, SiteContent } from './content';

interface ContentContextType {
  content: SiteContent | null;
  isLoading: boolean;
  handleSave: (key: keyof SiteContent, value: any) => void;
}

const ContentContext = createContext<ContentContextType>({ content: null, isLoading: true, handleSave: () => {} });

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getContent().then(data => {
      setContent(data);
      setIsLoading(false);
    }).catch(err => {
      console.error('Failed to load content', err);
      setIsLoading(false);
    });
  }, []);

  const handleSave = useCallback((key: keyof SiteContent, value: any) => {
    setContent(prev => {
      if (!prev) return prev;
      const newContent = { ...prev, [key]: value };
      saveContent(newContent);
      return newContent;
    });
  }, []);

  return (
    <ContentContext.Provider value={{ content, isLoading, handleSave }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
