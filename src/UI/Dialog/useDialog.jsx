import { createContext, useContext, useState, useCallback } from 'react';

const DialogContext = createContext(undefined);

export const DialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);
  const toggleDialog = useCallback(() => setIsOpen(prev => !prev), []);

  const value = {
    isOpen,
    openDialog,
    closeDialog,
    toggleDialog,
  };

  return (
    <DialogContext.Provider value={value}>
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

export default useDialog;

