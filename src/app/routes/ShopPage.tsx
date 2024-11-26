import MainLayout from '@layouts/MainLayout';
import ItemList from '@components/ItemList';
export default function ShopPage() {
    return (
        <>
            <MainLayout>
                <h1 className="text-4xl">Shop</h1>
                <ItemList></ItemList>
            </MainLayout>
        </>
    );
}
