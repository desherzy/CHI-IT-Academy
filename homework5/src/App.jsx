import Layout from './components/Layout';
import Counter from './components/Counter';

export default function App() {
    return (
        <Layout>
            <Counter defaultValue={0} />
            <Counter defaultValue={10} />
        </Layout>
    )
}