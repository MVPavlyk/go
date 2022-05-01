import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './Components';
import {
    DescriptionPage,
    LocationPage,
    MapPage,
    MenuPage,
    OneRestaurantPage,
    PhotosPage,
    RestaurantListPage
} from './Pages';

function App() {
    return (
        <Routes>
            <Route path={'/go'} element={<Layout/>}>
                <Route index element={<RestaurantListPage/>}/>
                <Route path={'/go/place/:id'} element={<OneRestaurantPage/>}>
                    <Route path={'/go/place/:id/description'} element={<DescriptionPage/>}/>
                    <Route path={'/go/place/:id/photos'} element={<PhotosPage/>}/>
                    <Route path={'/go/place/:id/menu'} element={<MenuPage/>}/>
                    <Route path={'/go/place/:id/map'} element={<MapPage/>}/>
                    <Route path={'/go/place/:id/location'} element={<LocationPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
