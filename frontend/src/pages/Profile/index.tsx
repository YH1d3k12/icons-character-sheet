import ProfileForm from '../../components/ProfileForm';
import HeroPhoto from '../../components/HeroPhoto';
import QualityNote from '../../components/QualityNote';
import FlawNote from '../../components/FlawNote';
import './styles.css';

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="profile-page-container">
                <div className="pp-note-container">
                    <HeroPhoto />
                    <QualityNote />
                    <FlawNote />
                </div>
                <div className="pp-form-container">
                    <ProfileForm />
                </div>
            </div>
        </div>
    );
}
