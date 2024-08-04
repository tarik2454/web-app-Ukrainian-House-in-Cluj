import { Container, Section } from '../../shared/components';

export default function Hero() {
  return (
    <div className="border-y-[1px] border-gray-300">
      <Section>
        <Container>
          <p
            className="font-inter-700 text-[170px] font-bold text-center bg-clip-text text-transparent 
            bg-gradient-to-r from-yellow-500 from-30% via-amber-500 via-40% to-blue-600 to-70%"
          >
            Ukraine House
          </p>
        </Container>
      </Section>
    </div>
  );
}

// before:content-[''] before:block before:w-full before:h-1 before:bg-black-100_34
//     after:content-[''] after:block after:w-full after:h-1 after:bg-black-100_34
