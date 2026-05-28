'use client';
import { useState, useEffect, useCallback } from 'react';

export interface PlaylistEntry {
  id: string;
  artistName: string;
  albumName: string;
  jazzStyle: string;
  year: number | null;
  venue: string;
  rating: number; // 1-5
  notes: string;
  imageBase64?: string;
  dateAdded: string;
}

const KEY = 'jazz-playlist';

export function usePlaylist() {
  const [entries, setEntries] = useState<PlaylistEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  const save = useCallback((updated: PlaylistEntry[]) => {
    localStorage.setItem(KEY, JSON.stringify(updated));
    setEntries(updated);
  }, []);

  const addEntry = useCallback(
    (entry: Omit<PlaylistEntry, 'id' | 'dateAdded'>) => {
      const newEntry: PlaylistEntry = {
        ...entry,
        id: crypto.randomUUID(),
        dateAdded: new Date().toISOString(),
      };
      setEntries((prev) => {
        const updated = [newEntry, ...prev];
        localStorage.setItem(KEY, JSON.stringify(updated));
        return updated;
      });
      return newEntry;
    },
    []
  );

  const deleteEntry = useCallback((id: string) => {
    setEntries((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      localStorage.setItem(KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateEntry = useCallback((id: string, patch: Partial<PlaylistEntry>) => {
    setEntries((prev) => {
      const updated = prev.map((e) => (e.id === id ? { ...e, ...patch } : e));
      localStorage.setItem(KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { entries, loaded, addEntry, deleteEntry, updateEntry, save };
}
