import { Code, Text, Flex, Heading, HStack, Button } from '@chakra-ui/react';
import { useTranslation } from '../i18n';

const Home = () => {
  const { t, i18n } = useTranslation('common');
  const techs = ['Next.js', 'chakra-ui', 'typescript', 'jest', 'i18n'];
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading>Next.js i18n with Chakra UI Template</Heading>
      <Heading my={2} fontSize="2xl">
        {t('h1')}
      </Heading>
      <Text my={4}>Example repository of</Text>
      <HStack spacing={2} mb={12}>
        {techs.map((tech) => (
          <Code key={tech}>{tech}</Code>
        ))}
      </HStack>

      <Button
        m={4}
        position="fixed"
        top={0}
        right={0}
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'zh-HK' : 'en')
        }
      >
        Change Language
      </Button>

      <Text>Next ❤️ Chakra</Text>
    </Flex>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Home;
