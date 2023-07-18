interface BlogData {
    title: string;
    slug: {
        current: string;
    };
    mainImage:{
        asset: {
            url: string;
        }
    };
    categories: [{
        title: string;
    }]
    publishedAt: string;
    bodyRaw?: [{
        children:[{
            text: string;
        }]
    }]

}