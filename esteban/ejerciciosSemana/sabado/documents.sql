CREATE TABLE IF NOT EXISTS public.type_document
(
    id integer NOT NULL DEFAULT nextval('type_document_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT id PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.type_document
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS public.documents
    (
        id integer NOT NULL DEFAULT nextval('documents_id_seq'::regclass),
        key text COLLATE pg_catalog."default" NOT NULL,
        url text COLLATE pg_catalog."default" NOT NULL,
        type_document integer NOT NULL,
        document text COLLATE pg_catalog."default" NOT NULL,
        status boolean NOT NULL,
        id_type_document integer NOT NULL,
        CONSTRAINT documents_pkey PRIMARY KEY (id),
        CONSTRAINT type_document_fkey FOREIGN KEY (id_type_document)
            REFERENCES public.type_document (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )

    TABLESPACE pg_default;

    ALTER TABLE IF EXISTS public.documents
        OWNER to postgres;


