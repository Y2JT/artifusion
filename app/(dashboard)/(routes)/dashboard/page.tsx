import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/"/>
    </div> // after sign out reach landing page security feat
  )
}

export default DashboardPage;