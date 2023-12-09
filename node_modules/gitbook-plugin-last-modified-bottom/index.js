module.exports = {
    hooks: {
        "page:before": function (page) {
            let content = page.content;
            content = `${content}\n\n>*Last modified: {{ file.mtime }}*`; 
            page.content = content; 
            return page;
        }
    }
};
