/* SVG-Based High-Aesthetics Responsive Chart Utility */

export const SVGCharts = {
    // 1. Create a beautiful themed Line Chart
    createLineChart(container, data, labels, colorVar = 'var(--module-accent)', colorVarRgb = 'var(--module-accent-rgb)') {
        container.innerHTML = '';
        const width = 500;
        const height = 220;
        const padding = 40;
        
        // Calculate bounds
        const maxVal = Math.max(...data) * 1.15 || 10;
        const minVal = Math.min(...data) * 0.85 > 0 ? Math.min(...data) * 0.85 : 0;
        const range = maxVal - minVal;
        
        // Create points
        const points = data.map((val, index) => {
            const x = padding + (index * (width - padding * 2) / (data.length - 1));
            const y = height - padding - ((val - minVal) * (height - padding * 2) / range);
            return { x, y, val };
        });

        // Path definitions
        const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        
        // Gradient area path
        const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

        // SVG elements construct
        let svgHtml = `
            <svg viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="svg-chart">
                <defs>
                    <linearGradient id="chart-grad-${Date.now()}" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="${colorVar}" stop-opacity="0.3"/>
                        <stop offset="100%" stop-color="${colorVar}" stop-opacity="0.0"/>
                    </linearGradient>
                </defs>
                
                <!-- Y Gridlines -->
                ${[0, 0.25, 0.5, 0.75, 1].map(pct => {
                    const y = padding + pct * (height - padding * 2);
                    const val = (maxVal - pct * range).toFixed(0);
                    return `
                        <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="var(--db-border)" stroke-dasharray="4,4" stroke-width="1" />
                        <text x="${padding - 10}" y="${y + 4}" fill="var(--db-text-muted)" font-size="10" text-anchor="end">${val}</text>
                    `;
                }).join('')}

                <!-- X Axis Labels -->
                ${points.map((p, i) => `
                    <text x="${p.x}" y="${height - 15}" fill="var(--db-text-muted)" font-size="10" text-anchor="middle">${labels[i]}</text>
                `).join('')}

                <!-- Highlight Area -->
                <path d="${areaPath}" fill="url(#chart-grad-${Date.now()})" />

                <!-- Main Line -->
                <path d="${linePath}" fill="none" stroke="${colorVar}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

                <!-- Nodes -->
                ${points.map((p, i) => `
                    <g class="chart-node" style="cursor: pointer;">
                        <circle cx="${p.x}" cy="${p.y}" r="5" fill="${colorVar}" stroke="var(--db-card-bg)" stroke-width="2" />
                        <circle cx="${p.x}" cy="${p.y}" r="9" fill="${colorVar}" opacity="0" class="hover-glow" />
                        <title>${labels[i]}: ${p.val}</title>
                    </g>
                `).join('')}
            </svg>
        `;
        container.innerHTML = svgHtml;
    },

    // 2. Create a clean Bar Chart
    createBarChart(container, data, labels, colorVar = 'var(--module-accent)') {
        container.innerHTML = '';
        const width = 500;
        const height = 220;
        const padding = 40;
        
        const maxVal = Math.max(...data) * 1.15 || 10;
        const range = maxVal;
        const barWidth = ((width - padding * 2) / data.length) * 0.65;
        const spacing = ((width - padding * 2) / data.length) * 0.35;

        let svgHtml = `
            <svg viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="svg-chart">
                <!-- Y Gridlines -->
                ${[0, 0.25, 0.5, 0.75, 1].map(pct => {
                    const y = padding + pct * (height - padding * 2);
                    const val = (maxVal - pct * range).toFixed(0);
                    return `
                        <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="var(--db-border)" stroke-dasharray="4,4" stroke-width="1" />
                        <text x="${padding - 10}" y="${y + 4}" fill="var(--db-text-muted)" font-size="10" text-anchor="end">${val}</text>
                    `;
                }).join('')}

                <!-- Bars -->
                ${data.map((val, i) => {
                    const x = padding + (i * (width - padding * 2) / data.length) + spacing / 2;
                    const barHeight = (val * (height - padding * 2)) / range;
                    const y = height - padding - barHeight;
                    return `
                        <g style="cursor: pointer;">
                            <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${colorVar}" rx="4" opacity="0.85" style="transition: opacity 0.2s;">
                                <title>${labels[i]}: ${val}</title>
                            </rect>
                            <text x="${x + barWidth / 2}" y="${height - 15}" fill="var(--db-text-muted)" font-size="10" text-anchor="middle">${labels[i]}</text>
                        </g>
                    `;
                }).join('')}
            </svg>
        `;
        container.innerHTML = svgHtml;
    },

    // 3. Create a circular Progress ring
    createProgressRing(container, percent, colorVar = 'var(--module-accent)') {
        container.innerHTML = '';
        const size = 120;
        const strokeWidth = 10;
        const radius = (size - strokeWidth) / 2;
        const circ = 2 * Math.PI * radius;
        const strokeDashoffset = circ - (percent / 100) * circ;

        container.innerHTML = `
            <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="progress-ring-svg">
                <circle cx="${size/2}" cy="${size/2}" r="${radius}" stroke="var(--db-border)" stroke-width="${strokeWidth}" fill="transparent" />
                <circle cx="${size/2}" cy="${size/2}" r="${radius}" stroke="${colorVar}" stroke-width="${strokeWidth}" fill="transparent"
                    stroke-dasharray="${circ}" stroke-dashoffset="${strokeDashoffset}" stroke-linecap="round" style="transition: stroke-dashoffset 0.5s ease-in-out;" />
                <text x="50%" y="54%" font-family="var(--font-heading)" font-weight="800" font-size="20" fill="var(--db-text)" text-anchor="middle" alignment-baseline="middle">
                    ${percent}%
                </text>
            </svg>
        `;
    }
};
