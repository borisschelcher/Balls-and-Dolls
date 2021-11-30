import { Routes } from "@angular/router"
import { HomeComponent } from "../Page/Home/home/home.component"
import { NotFoundComponent } from "../Page/Not-Found/not-found/not-found.component"

const appRoutes: Routes = [
    {
        path: "Home",
        component: HomeComponent,
    },
    {
        path: "/Not-Found",
        component: NotFoundComponent,
    },
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "**",
        redirectTo: "/Not-Found"
    }
];

export default appRoutes;