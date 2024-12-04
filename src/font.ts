import { Roboto } from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'], // Specify the subsets you need
    weight: ['400', '500', '700'], // Include desired font weights
    style: ['normal', 'italic'], // Include desired styles
    display: 'swap', // Improves loading performance
  });