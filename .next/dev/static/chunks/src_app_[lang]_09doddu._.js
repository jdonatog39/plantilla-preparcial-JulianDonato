(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/[lang]/components/ItemCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/context/DictionaryContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// Tarjeta de un personaje de Rick and Morty (datos consumidos de la API de Rick and Morty)
/**
 * Recibe un personaje por props y lo pinta. No pide datos ni los modifica:
 * es "presentacional". Lo único que necesita del contexto es el diccionario,
 * y por eso tiene que ser Client Component.
 *
 * NUEVA API: aquí decides QUÉ campos se ven en la tarjeta (los importantes;
 * el resto va en el detalle). Cada línea nueva necesita su etiqueta en los JSON.
 */ 'use client';
;
function ItemCard({ mascota }) {
    _s();
    const { dictionary, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"])();
    return(// `locale` SIEMPRE en el href. Si pones "/characters/1" sin idioma,
    // el proxy te redirige y pierdes el idioma actual.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: mascota.image,
                alt: mascota.species,
                className: "w-full rounded-md"
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/components/ItemCard.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold",
                children: mascota.species
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/components/ItemCard.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/components/ItemCard.tsx",
        lineNumber: 22,
        columnNumber: 7
    }, this));
}
_s(ItemCard, "tTSxE2IqON+/RWGX2aVjM/MLIOA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"]
    ];
});
_c = ItemCard;
var _c;
__turbopack_context__.k.register(_c, "ItemCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/[lang]/components/ItemList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItemList",
    ()=>ItemList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$hooks$2f$useMascota$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/hooks/useMascota.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$components$2f$ItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/components/ItemCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * LA LISTA: buscador + filtro + grid de tarjetas.
 *
 * El estado de los filtros (`search`, `status`) vive AQUÍ, no en los hijos.
 * SearchBar y StatusFilter son "controlados": reciben `value` y `onChange`
 * y no guardan nada. Eso se llama "levantar el estado" (lifting state up)
 * y es necesario porque los dos filtros se combinan en un solo `.filter()`.
 *
 * Client Component: usa useState y lee el contexto.
 *
 * NUEVA API: lo único que cambia es por qué campo buscas (hoy `c.name`)
 * y por qué campo filtras (hoy `c.status`).
 */ 'use client';
;
;
;
function ItemList() {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('') // texto del buscador
    ;
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all') // 'all' = sin filtrar
    ;
    const { mascota } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$hooks$2f$useMascota$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMascota"])();
    const grid = 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: grid,
        children: [
            mascota
        ].map((mascota)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$components$2f$ItemCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mascota: mascota
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/components/ItemList.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, mascota.id, false, {
                fileName: "[project]/src/app/[lang]/components/ItemList.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/components/ItemList.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ItemList, "eLzNb75gskTJRIHQtlfnsP6v7SM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$hooks$2f$useMascota$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMascota"]
    ];
});
_c = ItemList;
var _c;
__turbopack_context__.k.register(_c, "ItemList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/[lang]/context/mascotaContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MascotaContext",
    ()=>MascotaContext,
    "MascotaProvider",
    ()=>MascotaProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// Context for managing mascota (pet) state throughout the application.
"use client";
;
const MascotaContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    mascota: null,
    setMascota: ()=>{}
});
const MascotaProvider = ({ children, initialMascotas, apiFailed })=>{
    _s();
    const [mascotas, setMascotas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMascotas);
    const [mascota, setMascota] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MascotaContext.Provider, {
        value: {
            mascota,
            setMascota
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/context/mascotaContext.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MascotaProvider, "8kUvxN04Kzh5s1iFrPNfU/bQ3ek=");
_c = MascotaProvider;
const __TURBOPACK__default__export__ = MascotaContext;
var _c;
__turbopack_context__.k.register(_c, "MascotaProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/[lang]/hooks/useMascota.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMascota",
    ()=>useMascota
]);
/**
 * Atajo para leer el CharactersContext.
 *
 * ¿Para qué existe si podría usar useContext directo en cada componente?
 *   1. Para no repetir `useContext(CharactersContext)` en 6 archivos.
 *   2. Para el chequeo de null: el contexto arranca en `null`, así que sin
 *      esta comprobación TypeScript obligaría a escribir `characters?.` en
 *      todos lados. Aquí se descarta el null una sola vez.
 *   3. Para que el error sea claro: si olvidas envolver con el Provider,
 *      ves este mensaje en vez de un "cannot read property of null".
 *
 * Se usa así, en cualquier Client Component:
 *   const { characters, addCharacter, loading } = useCharacters()
 *
 * ⚠️ Solo funciona en componentes con 'use client' y que estén DENTRO del
 * <CharactersProvider> (que se monta en layout.tsx, así que cubre toda la app).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$mascotaContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/context/mascotaContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useMascota = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$mascotaContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MascotaContext"]);
    if (!context) {
        // Si ves este error: o falta 'use client', o el componente quedó fuera del Provider.
        throw new Error('useMascota must be used within a MascotaProvider');
    }
    return context // a partir de aquí TypeScript ya sabe que NO es null
    ;
};
_s(useMascota, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%5Blang%5D_09doddu._.js.map