import ProfileCard from '@/components/props/profile-demo/ProfileCard';

export default function ProfileDemo() {
  const user = { id: 1, name: 'John', email: 'john@test.com' };
  const address = { street: '123 Main St', city: 'NYC', country: 'USA' };
  const tags = ['developer', 'designer', 'writer'];

  return (
    <div className="p-8">
      <ProfileCard 
        user={user}
        address={address}
        tags={tags}
        isActive={true}
      />
    </div>
  );
}
