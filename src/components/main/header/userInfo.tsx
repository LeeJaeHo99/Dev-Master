import UserImg from '../../ui/userImg';
import UserGrade from '@/components/ui/userGrade';

export default function userInfo() {
    return (
        <div className="user-info--wrap flex items-center justify-center text-xl">
            <div  className="user-info--text flex items-center justify-center gap-3 pb-1">
                <UserGrade/>
                <UserImg/>
                <span>이재호님</span>
            </div>
        </div>
    );
}
