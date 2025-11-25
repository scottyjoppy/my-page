---
title: "Day 124: Bullet Direction"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 15, 2025"
description: "Separating bullet logic to it's own class and changing the trajectory of the bullets."
---

Hello friends,

<br>

Today I did a bit more organization, separating the bullet logic into it's own class. This also gave me the opportunity to change the direction of the bullet to go towards where I click.

<br>

## Follow The Mouse

<br>

Currently when a bullet it created, it's direction is determined by hard coding the position of the enemy. The goal is so that instead of curving towards the enemy, the bullet will go directly towards where the mouse was pressed.

<br>

```cpp
//Player Class

bullets[i].Initialize(sprite.getPosition(), mousePosition, 0.5f);

//Bullet Class

void Bullet::Initialize(const sf::Vector2f& position, const sf::Vector2f& target, float speed)
{
	m_speed	= speed;

    //Arbitrary bullet size
	rectangleShape.setSize(sf::Vector2f(50, 25));
	
    //Mouse position
    rectangleShape.setPosition(position);
	
    //Normalize using the mouse position   
    direction = Math::NormalizeVector(target - position);
}

void Bullet::Update(float deltaTime)
{
    //Move the bullet towards where the mouse was clicked.
	rectangleShape.setPosition(rectangleShape.getPosition() + direction * m_speed * deltaTime);
}
```

<br>

Now my bullets move towards the mouse. A lot of the tutorials today involved pointers, passing by reference, and while these concepts do challenge me in terms of when to use it, I'm starting to have a much better understanding of what exactly they are.

<br>

Thank you for reading today's blog, this whole process has taught me a lot so far, I'm excited to continue! Until the next lesson friends.