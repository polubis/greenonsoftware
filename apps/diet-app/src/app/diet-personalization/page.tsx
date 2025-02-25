import DietPersonalizationForm from '../../client/components/diet-personalization-form/diet-personalization-fom';
import Wrapper from '../../client/components/wrapper/wrapper';

export default function DietPersonalization() {
  return (
    <section className="bg-gray-100 ">
      <Wrapper>
        <DietPersonalizationForm />
      </Wrapper>
    </section>
  );
}
