-- select count(*) from usuarios where idade >= 18;

-- select *, nome as nomeCompleto from usuarios where idade >= 18;

-- select count(*) as "quantidade Usuarios" from usuarios where idade >= 18;

-- select nome || ' ' || email as nomeEmail from usuarios;

-- select concat(nome, ' - ', email, ' - ', idade) as nome_email_idade from usuarios;

-- select avg(idade) from usuarios;

-- select round(avg(idade)) from usuarios;

-- select round(avg(idade), 2) from usuarios;

-- select min(cadastro) from usuarios;

-- select sum(idade) from usuarios;

-- select idade::text from usuarios;

-- select '123'::integer;

-- select '123' + 4;

-- select '123'::integer + '4';

-- select cast(idade as text) from usuarios;

-- select now();

-- select * from agendamentos where cast(agendamento as date) > now();

-- select cast(agendamento as date) from agendamentos;

-- select cast(agendamento as time) from agendamentos;

-- select cast(agendamento as timestamp) from agendamentos;

-- select * from agendamentos where cast(agendamento as timestamp) > now();

-- select age('2022-03-16 12:00:00', '2025-02-15 11:32:34');

-- select age(cast('2022-03-16 12:00:00' as timestamp));

-- select age(cast('2022-03-16 12:00:00' as date));

-- select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) > now();

-- select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) < now();

-- select coalesce(null, 'batata');

-- select concat(nome, ' - ', coalesce(telefone, 'Não possui telefone')) from usuarios;

-- select concat(nome, ' - ', coalesce(telefone, email, 'Não possui')) from usuarios;

-- select idade, count(id) from usuarios group by idade;

-- select idade, count(id), sum(idade) from usuarios group by idade;