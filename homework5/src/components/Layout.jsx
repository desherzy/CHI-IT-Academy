export default function Layout({ children }) {
    return (
        <div className="layout">
            <h1>Counter Application</h1>
            <div className="content">
                {children}
            </div>
        </div>
    );
}