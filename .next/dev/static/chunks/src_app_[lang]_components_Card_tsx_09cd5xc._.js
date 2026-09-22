(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/[lang]/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
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
function Card({ mascota }) {
    _s();
    const { dictionary, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: mascota.image,
                alt: mascota.species,
                className: "w-full rounded-md"
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/components/Card.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold",
                children: mascota.species
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/components/Card.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/components/Card.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
}
_s(Card, "tTSxE2IqON+/RWGX2aVjM/MLIOA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$context$2f$DictionaryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDictionary"]
    ];
});
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%5Blang%5D_components_Card_tsx_09cd5xc._.js.map