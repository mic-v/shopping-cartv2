import MainLayout from '@layouts/MainLayout';
import ItemList from '@components/ItemList';
export default function ShopPage() {
    return (
        <>
            <MainLayout>
                <h1>Shop</h1>
                <ItemList></ItemList>
            </MainLayout>
        </>
    );
}
