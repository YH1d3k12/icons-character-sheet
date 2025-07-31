import InventoryForm from '../../components/InventoryForm';
import AdvancedStatsForm from '../../components/AdvancedStatsForm';
import './styles.css';

export default function InventoryPage() {
    return (
        <div className="inventory-page">
            <AdvancedStatsForm />
            <InventoryForm />
        </div>
    );
}
