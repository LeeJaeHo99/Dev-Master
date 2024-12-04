import GapLine from '../../ui/GapLine';

export default function SiteInfo() {
    return (
        <div className="site-info--wrap flex items-center justify-center gap-4">
            <div>
                <span className="text-slate-400">주소: </span>
                <span className="text-slate-700 font-light">
                    경기도 화성시 반월동 210-202
                </span>
            </div>
            <GapLine />
            <div>
                <span className="text-slate-400">사업자 등록번호: </span>
                <span className="text-slate-700 font-light">
                    1124-83231-88653
                </span>
            </div>
            <GapLine />
            <div>
                <span className="text-slate-400">연락처: </span>
                <span className="text-slate-700 font-light">02-4512-9552</span>
            </div>
        </div>
    );
}
