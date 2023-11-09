-- select * from musicas;

-- select id, compositor, ritmo from musicas;

-- distinct compositor, composicao from musicas;

-- select * from musicas where tempo < 100;

-- select * from musicas where compositor IS NULL;

-- select * from musicas where tempo > 200;

-- select * from musicas where tempo > 200 and tempo < 400;

-- select * from musicas where tempo between 200 and 400;

-- select * from musicas where compositor = 'Schubert' or compositor = 'Bach';

-- select * from musicas where compositor is null;

-- select * from musicas where compositor is not null;

-- select * from musicas limit 3;

-- select * from musicas offset 3;

-- select * from musicas limit 10 offset 10;

-- select * from musicas order by id ASC;

-- select * from musicas order by id desc;

-- select * from musicas where compositor = 'Schubert' order by id desc;

-- select * from musicas where compositor = 'Schubert' order by id asc limit 5 offset 5;

-- select * from musicas order by compositor asc;

-- select * from musicas order by compositor desc;

-- select * from musicas order by compositor asc, composicao desc;

-- select * from musicas order by ritmo asc;

-- select * from musicas where composicao like 'Violin Sonata in B minor';

-- select * from musicas where composicao like '%in G minor';

-- select * from musicas where composicao like 'Violin Sonata%';

-- select * from musicas where composicao like '%Sonata%';

-- select * from musicas where composicao like '_iano Sonata in A major';

-- select * from musicas where composicao like '_iano Sonata in A major';

-- select * from musicas where composicao like '___no Sonata %';

-- select * from musicas where composicao like '___no Sonata %';

-- select * from musicas where composicao ilike 'violin Sonata in B minor';