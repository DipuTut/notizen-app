import { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Note } from "../types/notes.type";

type Props = {
    notes: Note[],
    addNote: (note: Note) => void
}

function CreateNote(props: Props) {

    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const categoriesRef = useRef<HTMLInputElement>(null);
    const userRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const title = titleRef.current!.value;
        const content = contentRef.current!.value;
        const categoriesInput = categoriesRef.current!.value;
        const user = categoriesRef.current!.value;

        if (!title || !content || !categoriesInput || !user) return

        const id = props.notes.length + 1;
        const categories = categoriesInput.split(',').map(category => category.trim())
        const date = new Date()

        props.addNote({
            title,
            content,
            user,
            date,
            categories,
            id
        });

    };

    return (
        <Card className='mb-1'>
            <Card.Body>
                <Card.Title>Notiz erstellen</Card.Title>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Titel</Form.Label>
                        <Form.Control type="text" placeholder="Gebe den Titel ein" ref={titleRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Inhalte</Form.Label>
                        <Form.Control as="textarea" placeholder="Gebe die Notiz ein" rows={5} ref={contentRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Kategorien</Form.Label>
                        <Form.Control type="text" placeholder="Gebe die Kategorien ein" ref={categoriesRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Benutzer</Form.Label>
                        <Form.Control type="text" placeholder="Gebe den Benutzernamen ein" ref={userRef} />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">Notiz erstellen</Button>
                </Form>
             </Card.Body>
         </Card>
      );

}

export default CreateNote;