(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1850:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,5751,23)),Promise.resolve().then(t.t.bind(t,6688,23)),Promise.resolve().then(t.t.bind(t,9525,23)),Promise.resolve().then(t.bind(t,4760)),Promise.resolve().then(t.bind(t,1176)),Promise.resolve().then(t.bind(t,5013))},4760:(e,r,t)=>{"use strict";t.d(r,{PostHogProvider:()=>u});var n=t(4001),i=t(9e3),s=t(7437),o=t(3371),a=t(7749),l=t(8596);function u(e){let{children:r}=e;return(0,a.useEffect)(()=>{s.Ay.init("phc_iPOJHa0rgysoO1l1oNVYYNLnViLacPAUP0sfY4PRpZ9",{api_host:l.env.NEXT_PUBLIC_POSTHOG_HOST||"https://eu.i.posthog.com",person_profiles:"identified_only",capture_pageview:!1})},[]),(0,n.jsxs)(o.so,{client:s.Ay,children:[(0,n.jsx)(d,{}),r]})}function c(){let e=(0,i.usePathname)(),r=(0,i.useSearchParams)(),t=(0,o.sf)();return(0,a.useEffect)(()=>{if(e&&t){let n=window.origin+e;r.toString()&&(n=n+"?"+r.toString()),t.capture("$pageview",{$current_url:n})}},[e,r,t]),null}function d(){return(0,n.jsx)(a.Suspense,{fallback:null,children:(0,n.jsx)(c,{})})}},1176:(e,r,t)=>{"use strict";t.d(r,{ThemeProvider:()=>s});var n=t(4001),i=t(3041);function s(e){let{children:r,...t}=e;return(0,n.jsx)(i.N,{...t,children:r})}t(7749)},5013:(e,r,t)=>{"use strict";t.d(r,{ThemeToggle:()=>g});var n=t(4001),i=t(9732),s=t(9167),o=t(3041),a=t(7749),l=t(762),u=t(8069),c=t(3549),d=t(2184);let f=(0,u.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),h=a.forwardRef((e,r)=>{let{className:t,variant:i,size:s,asChild:o=!1,...a}=e,u=o?l.DX:"button";return(0,n.jsx)(u,{className:function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,d.QP)((0,c.$)(r))}(f({variant:i,size:s,className:t})),ref:r,...a})});function g(){let{theme:e,setTheme:r}=(0,o.D)(),[t,l]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{l(!0)},[]),t)?(0,n.jsx)(h,{variant:"ghost",size:"icon",onClick:()=>r("dark"===e?"light":"dark"),className:"w-9 h-9 transition-all hover:bg-muted","aria-label":"Toggle theme",children:"dark"===e?(0,n.jsx)(i.A,{className:"h-[1.2rem] w-[1.2rem] text-yellow-300 transition-all"}):(0,n.jsx)(s.A,{className:"h-[1.2rem] w-[1.2rem] transition-all"})}):(0,n.jsx)(h,{variant:"ghost",size:"icon",className:"w-9 h-9 opacity-0"})}h.displayName="Button"},9525:()=>{}},e=>{var r=r=>e(e.s=r);e.O(0,[360,657,751,278,142,767,358],()=>r(1850)),_N_E=e.O()}]);