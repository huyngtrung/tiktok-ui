import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//=> Đặt tên lại để mã dễ hiểu và tránh xung đột khi import
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";

function App() {
    return (
        <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null){
                                Layout = Fragment;
                            } 

                            return <Route 
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        })}
                    </Routes>
                </div>
        </Router>
    );
}

export default App;

/*
alt + w để sử dụng extension htmltagwrap
prop type để verify các prop đầu vào
*/
