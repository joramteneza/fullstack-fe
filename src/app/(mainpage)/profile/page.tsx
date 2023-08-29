import Avatar from "@/app/components/commons/Avatar";

const UserProfile = () => {
  // Replace these values with real data
  const name = "JD";
  const firstName = "John";
  const lastName = "Doe";
  const email = "john.doe@example.com";

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-64">
        <Avatar name={name} />
        <h1 className="text-2xl mt-4">{`${firstName} ${lastName}`}</h1>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
