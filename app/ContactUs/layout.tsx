import Navbar from '../components/Navbar';
import back from '@/public/colorBack3.jpg'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return ( 
    <div>
{children}
    </div>
  );
}