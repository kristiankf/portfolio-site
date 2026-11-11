<template>
    <div class="workflow-visual" role="img" aria-label="An animated isometric cube representing connected business workflows">
        <div class="workflow-ring workflow-ring-back"></div>
        <div class="workflow-ring workflow-ring-front"></div>
        <svg class="workflow-cube" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <linearGradient id="cube-shadow" x1="90" y1="200" x2="330" y2="360" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A89FFF" stop-opacity=".38" />
                    <stop offset="1" stop-color="#6D62DD" stop-opacity=".02" />
                </linearGradient>
                <filter id="soft-shadow" x="22" y="25" width="376" height="370" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="18" />
                </filter>
            </defs>
            <ellipse cx="211" cy="336" rx="132" ry="35" fill="url(#cube-shadow)" filter="url(#soft-shadow)" />
            <g class="cube-tiles">
                <polygon v-for="tile in tiles" :key="tile.id" :points="tile.points" :fill="tile.fill" stroke="#26223D" stroke-width="3" stroke-linejoin="round" class="cube-tile" :style="{ '--tile-delay': `${tile.index * 45}ms` }" />
            </g>
            <path d="M58 228C35 211 35 186 56 171L78 155" stroke="#A79FFF" stroke-opacity=".62" stroke-width="2" stroke-dasharray="4 7" />
            <circle cx="55" cy="171" r="5" fill="#A79FFF" />
            <path d="M343 237C371 236 384 219 383 196L381 179" stroke="#78D9C7" stroke-opacity=".7" stroke-width="2" stroke-dasharray="4 7" />
            <circle cx="381" cy="179" r="5" fill="#78D9C7" />
            <path d="M196 45C205 31 222 31 231 45L242 61" stroke="#F6C66D" stroke-opacity=".76" stroke-width="2" stroke-dasharray="4 7" />
            <circle cx="242" cy="61" r="5" fill="#F6C66D" />
        </svg>
        <span class="workflow-chip workflow-chip-apps"><Icon name="hugeicons:apps" /> Your apps</span>
        <span class="workflow-chip workflow-chip-ai"><Icon name="hugeicons:artificial-intelligence-04" /> AI-assisted</span>
        <span class="workflow-chip workflow-chip-flow"><Icon name="hugeicons:workflow-square-10" /> One clear flow</span>
        <span class="workflow-spark workflow-spark-one">✳</span>
        <span class="workflow-spark workflow-spark-two">✳</span>
    </div>
</template>

<script setup>
const colors = {
    top: ['#E6BD68', '#E9C672', '#8AD1C2', '#F2D17C', '#DFAC57', '#8BCBBB', '#7CC7BA', '#87CBBB', '#6FBBAE'],
    front: ['#A69AFF', '#9486F4', '#7D70DF', '#9284ED', '#8173E0', '#6F62C7', '#786AD4', '#6D60C4', '#5F55B2'],
    right: ['#E49E70', '#D88966', '#CB765C', '#E8AE7C', '#D89567', '#C88059', '#D69A6D', '#C9845B', '#B77454'],
}

const faceGeometry = [
    { face: 'top', origin: [90, 150], u: [40, -23.333], v: [40, 23.333] },
    { face: 'front', origin: [90, 150], u: [40, 23.333], v: [0, 46.667] },
    { face: 'right', origin: [210, 220], u: [40, -23.333], v: [0, 46.667] },
]

const tiles = faceGeometry.flatMap(({ face, origin, u, v }) => {
    const points = (col, row) => [origin[0] + u[0] * col + v[0] * row, origin[1] + u[1] * col + v[1] * row]
    return Array.from({ length: 9 }, (_, index) => {
        const col = index % 3
        const row = Math.floor(index / 3)
        const a = points(col, row)
        const b = points(col + 1, row)
        const c = points(col + 1, row + 1)
        const d = points(col, row + 1)
        return {
            id: `${face}-${index}`,
            index: faceGeometry.findIndex((item) => item.face === face) * 9 + index,
            fill: colors[face][index],
            points: [a, b, c, d].map(([x, y]) => `${x},${y}`).join(' '),
        }
    })
})
</script>
