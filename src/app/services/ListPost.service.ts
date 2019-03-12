export class ListPostService {

  postes = [
    {
      id: 0,
      title: 'First Post',
      texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'

    },
    {
      id: 1,
      title: 'Second Post',
      texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
      id: 2,
      title: 'Third Post',
      texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    }
  ];

  addPost(title: string, content: string){
    const poste = {
      id: 0,
      title: '',
      texte: ''
    };

    poste.id = this.postes[(this.postes.length - 1)].id + 1
    poste.title = title;
    poste.texte = content;

    console.log(poste);
    this.postes.push(poste);
  }

}
