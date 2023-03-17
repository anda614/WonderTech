import Layout from '../components/CompleteForm/Layout';
import LeftSidebar from '../components/CompleteForm/LeftSidebar';
import RightSidebar from '../components/CompleteForm/RightSidebar';
import MainContent from '../components/CompleteForm/MainContent';

const CompleteFormPage = () => {
  return (
    <Layout>
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </Layout>
  );
};

export default CompleteFormPage;
