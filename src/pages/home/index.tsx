import { Button, PageContainer } from "./styles";

export const HomePage = () => {
  const handleUserLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  return (
    <PageContainer>
      <Button onClick={handleUserLogout}>Logout</Button>
    </PageContainer>
  );
};
