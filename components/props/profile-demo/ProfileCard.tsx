interface Address {
  street: string;
  city: string;
  country: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface ProfileCardProps {
  user: User;
  address: Address;
  tags: string[];
  isActive: boolean;
}

export default function ProfileCard({ user, address, tags, isActive }: ProfileCardProps) {
  return (
    <div className="border p-4 mb-4">
      <h2>{user.name} (ID: {user.id})</h2>
      <p>Email: {user.email}</p>
      
      <div className="mt-2">
        <strong>Address:</strong>
        <p>{address.street}, {address.city}, {address.country}</p>
      </div>
      
      <div className="mt-2">
        <strong>Tags:</strong> {tags.join(', ')}
      </div>
      
      <div className="mt-2">
        Status: {isActive ? '✅ Active' : '❌ Inactive'}
      </div>
    </div>
  );
}
