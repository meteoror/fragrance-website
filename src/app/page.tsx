import Card from '../components/Card';

export default function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      <Card title="Card 1" content="This is the first card." />
      <Card title="Card 2" content="This is the second card." />
      <Card title="Card 3" content="This is the third card." />
    </div>
  );
}
