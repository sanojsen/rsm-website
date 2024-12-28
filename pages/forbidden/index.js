export const runtime = 'edge';

export default function Forbidden() {
    return (
        <div style={{margin: 'auto', display: 'grid', justifyContent: 'center',
            alignContent: 'center', height: '100vh', backgroundColor: '#000' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color:'#fff'}}>
                <span style={{fontSize: '1.5rem', fontWeight: 700,  marginRight: '5px'}}>404</span> | Site not available for now
            </div>
        </div>
    );
}
