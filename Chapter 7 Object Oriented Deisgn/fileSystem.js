// Explain the data structures and algorithms that you would use to design an in-memory
// file system. Illustrate with an example in code where possible.

let Folder = function(name){
    this.type = 'folder';
    this.name = name;
    this.filesAndFolders = [];
};

Folder.prototype.findFolder = function(name){
    if (this.name === name){
        return this;
    } else{
        this.filesAndFolders.forEach((item) =>{
            if (item.type === 'folder'){
                item.findFolder(name);
            };
        });
    }
};

Folder.prototype.findFile =function(name){
    this.filesAndFolders.forEach((item) =>{
        if(item.type === 'file' && item.name == name){
            return item;
        } 
    });
    this.filesAndFolders.forEach((item) =>{
        if (item.type === 'folder'){
            item.findFile(name);
        }
    });
};

let File = function(name, content){
    this.type = 'file';
    this.name = name;
    this.content = content !== undefined ? content : null;
};

let FileSystem = function(name){
    this.folder = new Folder(name);
    this.currentFolder = null;
    this.currentFile = null;
    this.index = {};
};

FileSystem.prototype.showCurrent = function(){
    if (this.currentFolder !== null || this.currentFile !== nill){
        return this.currentFile.name || this.currentFolder.name;
    } else{
        console.log('no file');
    }
};

FileSystem.prototype.findFolder = function(name){
    let found = this.folder.findFolder(name);
    this.currentFolder = found;
    return found;
};

FileSystem.prototype.findFile = function(name){
    let found = this.folder.findFile(name);
    this.currentFile = found;
    return found;
};

FileSystem.prototype.addFileToCurrentFolder = function(name, content){
    this.currentFolder.push(new File(name, content));
};

FileSystem.prototype.addFolderToCurrent= function(name){
    this.currentFolder.push(new Folder(name));
};

FileSystem.prototype.deleteCurrentFolder = function() {
    // delete from parent
    };
    
    FileSystem.prototype.deleteCurrentFile = function() {
    // delete from parent
    };
    