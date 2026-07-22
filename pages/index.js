
const Index = () => null

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/article/ai-morty',
      permanent: false
    }
  }
}

export default Index
