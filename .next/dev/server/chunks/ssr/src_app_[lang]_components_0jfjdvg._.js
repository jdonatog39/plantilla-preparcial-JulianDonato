module.exports = [
"[project]/src/app/[lang]/components/ItemCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/context/DictionaryContext.tsx [app-ssr] (ecmascript)");
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
;
function ItemCard({ mascota }) {
    const { dictionary, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDictionary"])();
    return(// `locale` SIEMPRE en el href. Si pones "/characters/1" sin idioma,
    // el proxy te redirige y pierdes el idioma actual.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: mascota.image,
                alt: mascota.species,
                className: "w-full rounded-md"
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/components/ItemCard.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
}),
"[project]/src/app/[lang]/components/ItemList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/app/[lang]/components/ItemList.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/[lang]/components/SearchBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/context/DictionaryContext.tsx [app-ssr] (ecmascript)");
/**
 * Input de búsqueda. Componente *controlado*: no guarda estado propio,
 * el valor y el setter viven en el padre (ItemList).
 */ 'use client';
;
;
function SearchBar({ value, onChange }) {
    const { dictionary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDictionary"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "search",
        value: value,
        onChange: (e)=>onChange(e.target.value),
        // Hasta el placeholder sale del diccionario.
        placeholder: dictionary.items.searchPlaceholder,
        "aria-label": dictionary.items.searchPlaceholder,
        className: "flex-1 rounded border bg-white px-3 py-2 text-gray-900"
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/components/SearchBar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/components/StatusFilter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/context/DictionaryContext.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../types/item'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
/**
 * Filtro por estado. También controlado por el padre.
 *
 * Patrón clave de i18n: el `value` viaja en inglés (como se guarda en el modelo)
 * y el texto visible sale traducido del diccionario.
 */ 'use client';
;
;
;
function StatusFilter({ value, onChange }) {
    const { dictionary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDictionary"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        value: value,
        onChange: (e)=>onChange(e.target.value),
        "aria-label": dictionary.items.fields.status,
        className: "rounded border bg-white px-3 py-2 text-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "all",
                children: dictionary.items.allStatuses
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/components/StatusFilter.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            STATUSES.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: status,
                    children: dictionary.items.status[status]
                }, status, false, {
                    fileName: "[project]/src/app/[lang]/components/StatusFilter.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/components/StatusFilter.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_%5Blang%5D_components_0jfjdvg._.js.map