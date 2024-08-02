import { Container, Section } from '../../shared/components';

export default function Hero() {
  return (
    <Section>
      <Container>
        <p
          className="font-inter-700 text-[170px] font-bold text-black-200 text-center
        before:content-[''] before:block before:w-full before:h-1 before:bg-black-100_34
        after:content-[''] after:block after:w-full after:h-1 after:bg-black-100_34"
        >
          Ukraine House
        </p>
      </Container>
    </Section>
  );
}
