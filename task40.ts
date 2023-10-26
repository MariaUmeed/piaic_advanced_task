//Task 40--//

function makeAlbum(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
      artist: artist,
      title: title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Creating album dictionaries and printing them
  const album1 = makeAlbum("Atif Asalm", "Album1");
  const album2 = makeAlbum("Abeda Parveen", "Album2", 12); // Including the number of tracks
  const album3 = makeAlbum("Ali Hader", "Album3", 8);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  