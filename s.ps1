$dirs = @(
    "src/lib/content",
    "src/lib/stores",
    "src/lib/i18n",
    "src/lib/components/shared",
    "src/lib/components/home",
    "src/lib/utils",
    "src/routes/about",
    "src/routes/developer/work-with-me",
    "src/routes/developer",
    "src/routes/leadership",
    "src/routes/videographer",
    "static"
)

$files = @(
    "src/lib/theme.ts",
    "src/lib/content/developer.ts",
    "src/lib/content/leadership.ts",
    "src/lib/content/videographer.ts",
    "src/lib/content/about.ts",
    "src/lib/content/index.ts",

    "src/lib/stores/lang.ts",
    "src/lib/stores/activeRole.ts",

    "src/lib/i18n/t.ts",

    "src/lib/components/shared/Card.svelte",
    "src/lib/components/shared/SectionLabel.svelte",
    "src/lib/components/shared/CTA.svelte",
    "src/lib/components/shared/Tag.svelte",
    "src/lib/components/shared/CornerTag.svelte",
    "src/lib/components/shared/SkillBars.svelte",
    "src/lib/components/shared/Timeline.svelte",
    "src/lib/components/shared/Nav.svelte",
    "src/lib/components/shared/LanguageToggle.svelte",
    "src/lib/components/shared/RoleHero.svelte",

    "src/lib/components/home/TriptychPanel.svelte",
    "src/lib/components/home/DotIndicator.svelte",
    "src/lib/components/home/BottomStrip.svelte",

    "src/lib/utils/cx.ts",

    "src/routes/+layout.svelte",
    "src/routes/+layout.ts",
    "src/routes/+page.svelte",

    "src/routes/about/+page.svelte",

    "src/routes/developer/+page.svelte",
    "src/routes/developer/work-with-me/+page.svelte",

    "src/routes/leadership/+page.svelte",

    "src/routes/videographer/+page.svelte",

    "src/app.css",
    "src/app.html"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        New-Item -ItemType File -Path $file -Force | Out-Null
    }
}

Write-Host "SvelteKit structure created successfully."