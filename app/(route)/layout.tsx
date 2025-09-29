import Header from '@/components/root/header';
import Footer from '@/components/root/footer';
import Section from '@/components/container';
import Container from '@/components/section';


interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout: React.FC<RoutesLayoutProps> = ({ children }) => {
  return (
    <main className="w-full">
      <Header />
      <Section>
        <Container>  {children}</Container>
      </Section>
      <Footer />
    </main>
  );
};

export default RoutesLayout;
