import ProfileForm from '../../components/ProfileForm';
import HeroPhoto from '../../components/HeroPhoto';
import './styles.css';

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="profile-page-row">
                <HeroPhoto />
                <ProfileForm />
            </div>
        </div>
    );
}
