const weaponClasses = [
    {
        id: 'ar',
        name: 'Assault Rifles',
        weapons: [
            { id: 'm4a1', name: 'M4A1' },
            { id: 'ak47', name: 'AK47' },
            { id: 'scar', name: 'SCAR' },
            { id: 'Groza', name: 'GROZA' },
            { id: 'famas', name: 'FAMAS' },
            { id: 'xm8', name: 'XM8' },
            { id: 'an94', name: 'AN94' },
            { id: 'plasma', name: 'PLASMA' },
            { id: 'aug', name: 'AUG' },
            { id: 'parafal', name: 'PARAFAL' },
            { id: 'kingfisher', name: 'KINGFISHER' },
            { id: 'g36', name: 'G36' }

        ]
    },
    {
        id: 'marksman rifle',
        name: 'Marksman Rifle',
        weapons: [
            { id: 'm14', name: 'M14' },
            { id: 'sks', name: 'SKS' },
            { id: 'svd', name: 'SVD' },
            { id: 'woodpecker', name: 'WOODPECKER' },
            { id: 'ac80', name: 'AC80' },
            { id: 'winchester', name: 'WINCHESTER' }
        ],
    },

    {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

        {
        id:'machine-gun',
        name:'Machine Gun',
        weapons: [
            { id: 'm249', name: 'M249' },
            { id: 'm60', name: 'M60' },
            { id: 'kord', name: 'KORD' }
        ],
    },

];

function getWeaponSkins(weaponId) {
    const skinNames = ['Dragon Fury', 'Neon Strike', 'Blood Moon', 'Golden Legacy'];
    const skinImages = [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop'
    ];

    return skinNames.map((name, index) => ({
        id: `${weaponId}-skin-${index + 1}`,
        name: name,
        image: skinImages[index] || skinImages[0]
    }));
}