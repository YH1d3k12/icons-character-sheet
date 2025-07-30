import ProfileForm from '../../components/ProfileForm';
import HeroPhoto from '../../components/HeroPhoto';
import QualityNote from '../../components/QualityNote';
import FlawNote from '../../components/FlawNote';
import './styles.css';

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="profile-page-row">
                <div className="profile-page-note-column">
                    <FlawNote />
                    <QualityNote />
                    <HeroPhoto />
                </div>
                <ProfileForm />
            </div>
        </div>
    );
}
