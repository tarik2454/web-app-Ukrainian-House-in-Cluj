import Container from '../../shared/components/Container';
import Section from '../../shared/components/Section';
import SectionTitle from '../../shared/components/SectionTitle';

export default function About() {
  return (
    <Section>
      <Container>
        <SectionTitle>Про нас</SectionTitle>
        <div className="flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            numquam, repudiandae odio exercitationem autem consectetur cumque a
            perferendis accusamus quo velit corporis tempore, illo quod odit
            cupiditate doloremque est sequi, facilis neque sint? Perspiciatis
            voluptatum, ea obcaecati dicta accusantium eum maiores quam enim
            nostrum esse repudiandae atque iure. Iste deserunt in pariatur harum
            praesentium odio numquam, soluta itaque quo vel eius natus dolor aut
            illo esse quas consectetur voluptatum totam incidunt omnis! Aut
            repellendus, quas, tempore temporibus nesciunt et eaque quis
            voluptatibus architecto veniam esse reiciendis totam ex nobis ea
            debitis perferendis voluptatum. Magnam aliquam sed tempore
            asperiores a iste omnis provident tenetur doloremque nam itaque
            dolor enim animi nesciunt delectus mollitia, optio dignissimos
            molestiae vel consequuntur odio explicabo fugiat blanditiis quaerat.
            Eius itaque qui adipisci magni unde! Dolore pariatur eius cupiditate
            mollitia quis recusandae et repudiandae in odit blanditiis officia,
            repellat nihil non, distinctio libero sapiente quae voluptatibus
            voluptatem facilis possimus minima accusantium tenetur? Fuga
            excepturi quam distinctio molestias quisquam itaque, quod mollitia
            soluta modi alias est placeat impedit error consectetur veritatis
            libero iure dolores neque ex. Unde pariatur velit magnam numquam
            exercitationem reprehenderit est veritatis vel rem, suscipit quidem
            voluptates odit minus ipsam deleniti maxime illum delectus? Ut
            exercitationem veritatis laudantium cupiditate nobis a odit iure
            repudiandae totam commodi! Neque cum facilis, nulla pariatur quaerat
            debitis. Dolore dolorum ea, rem cupiditate quaerat iste eligendi
            laudantium expedita quae tenetur consequuntur itaque ipsa voluptates
            facere eaque adipisci iusto doloremque, aliquid molestiae doloribus!
            Nobis sit qui itaque iusto, esse ullam vitae eaque ex soluta magni
            aut est aliquam explicabo magnam, nemo in dicta, fugiat praesentium
            blanditiis!
          </p>

          <div>
            <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200 dark:text-dark-title">
              Нашi послуги
            </h3>
            <ul className="list-disc pl-5">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Consectetur adipiscing elit.</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
