import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import GlobalStyle from '@/lib/global-styles';
import StyledComponentsRegistry from '@/lib/style-sheet-manager';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Movies technical test',
  description: 'Generated with styled-components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
