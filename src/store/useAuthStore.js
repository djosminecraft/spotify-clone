import { create } from 'zustand';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../utils/firebase';

const useAuthStore = create((set, get) => ({
  // Auth state
  user: null,
  isLoading: true,
  error: null,
  
  // Actions
  setUser: (user) => set({ user }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  setError: (error) => set({ error }),
  
  clearError: () => set({ error: null }),
  
  // Sign in
  signIn: async (email, password) => {
    try {
      set({ error: null, isLoading: true });
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user, isLoading: false });
      return { success: true };
    } catch (error) {
      set({ error: error.message, isLoading: false });
      return { success: false, error: error.message };
    }
  },
  
  // Sign up
  signUp: async (email, password, displayName) => {
    try {
      set({ error: null, isLoading: true });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile
      await userCredential.user.updateProfile({
        displayName: displayName
      });
      
      set({ user: userCredential.user, isLoading: false });
      return { success: true };
    } catch (error) {
      set({ error: error.message, isLoading: false });
      return { success: false, error: error.message };
    }
  },
  
  // Sign out
  signOut: async () => {
    try {
      await signOut(auth);
      set({ user: null, error: null });
      return { success: true };
    } catch (error) {
      set({ error: error.message });
      return { success: false, error: error.message };
    }
  },
  
  // Initialize auth listener
  initAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, isLoading: false });
    });
  }
}));

export default useAuthStore;
